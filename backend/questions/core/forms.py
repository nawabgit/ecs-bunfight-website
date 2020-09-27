from django import forms
from .models import User
from answers.models import Questions, Answers


class RegisterForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'password', 'username']


class LoginForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = User
        fields = ['email', 'password']


class AddQuestionForm(forms.ModelForm):

    class Meta:
        model = Questions
        fields = ['title', 'user']


class AddAnswerForm(forms.ModelForm):

    class Meta:
        model = Answers
        fields = ['answer_text', 'question']
