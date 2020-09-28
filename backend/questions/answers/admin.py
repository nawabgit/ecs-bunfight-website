from django.contrib import admin
from .models import Question, Answer


class AnswerInline(admin.TabularInline):
    model = Answer


class QuestionAdmin(admin.ModelAdmin):

    inlines = [AnswerInline]
    exclude = ('user', 'slug',)
    
    def get_queryset(self, request):
        qs = super(QuestionAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(user=request.user)

    def save_model(self, request, instance, form, change):
        user = request.user 
        instance = form.save(commit=False)
        if not change or not instance.user:
            instance.user = user
        instance.save()
        form.save_m2m()
        return instance

admin.site.register(Question, QuestionAdmin)
