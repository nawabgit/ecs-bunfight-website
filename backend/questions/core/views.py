from django.shortcuts import render
from django.shortcuts import HttpResponseRedirect, redirect
from django.urls import reverse
from django.views.generic.edit import FormView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth import login, logout
from django.contrib.auth.hashers import make_password
from .models import User
from answers.models import Questions, Answers, QuestionGroups
from .forms import LoginForm, RegisterForm, AddQuestionForm, AddAnswerForm


class DashboardView(FormView):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(DashboardView, self).dispatch(request, *args, **kwargs)

    def get(self, request):
        content = {}
        if request.user.is_authenticated:
            user = request.user
            content['userdetail'] = user
            user.backend = 'django.contrib.core.backends.ModelBackend'
            questions = Questions.objects.filter(user=user)
            ques_obj = []
            for question in questions:
                q = (question, Answers.objects.filter(question=question))
                ques_obj.append(q)
            content['qandas'] = ques_obj

            form = AddAnswerForm(request.POST, request.FILES or None)
            content['form'] = form
            return render(request, 'dashboard.html', content)
        else:
            return redirect(reverse('login-view'))

    def post(self, request):
        form = AddAnswerForm(request.POST, request.FILES or None)
        if form.is_valid():
            answer_text = form.cleaned_data['answer_text']
            question = form.cleaned_data['question']
            user = request.user
            new_answer = Answers(user=user, answer_text=answer_text, question=question)
            new_answer.save()
        return redirect(reverse('dashboard-view'))


class RegisterView(FormView):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(RegisterView, self).dispatch(request, *args, **kwargs)

    def get(self, request):
        content = {}
        content['form'] = RegisterForm
        return render(request, 'register.html', content)

    def post(self, request):
        content = {}
        form = RegisterForm(request.POST, request.FILES or None)
        if form.is_valid():
            save_it = form.save(commit=False)
            save_it.password = make_password(form.cleaned_data['password'])
            save_it.save()
            login(request, save_it)
            return redirect(reverse('dashboard-view'))
        content['form'] = form
        template = 'register.html'
        return render(request, template, content)


class LoginView(FormView):

    content = {}
    content['form'] = LoginForm

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(LoginView, self).dispatch(request, *args, **kwargs)

    def get(self, request):
        content = {}
        if request.user.is_authenticated:
            return redirect(reverse('dashboard-view'))
        content['form'] = LoginForm
        return render(request, 'login.html', content)

    def post(self, request):
        content = {}
        email = request.POST['email']
        password = request.POST['password']
        try:
            users = User.objects.filter(email=email)
            user = authenticate(request, username=users.first().username, password=password)
            login(request, user)
            return redirect(reverse('dashboard-view'))
        except Exception as e:
            content = {}
            content['form'] = LoginForm
            content['error'] = 'Unable to login with provided credentials' + e
            return render_to_response('login.html', content)


class LogoutView(FormView):

    def get(self, request):
        logout(request)
        return HttpResponseRedirect('/')


class AddQuestionView(FormView):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(AddQuestionView, self).dispatch(request, *args, **kwargs)

    def get(self, request):
        content = {}

        questions = Questions.objects.all()
        ques_obj = []
        for question in questions:
            q = (question, Answers.objects.filter(question=question))
            ques_obj.append(q)
        content['qandas'] = ques_obj
    
        content['form'] = AddQuestionForm
        return render(request, 'addquestion.html', content)

    def post(self, request):
        form = AddQuestionForm(request.POST, request.FILES or None)
        if form.is_valid():
            question = form.cleaned_data['title']
            society = form.cleaned_data['user']
            new_question = Questions(user=society, title=question)
            new_question.save()
        return redirect(reverse('addquestion-view'))
