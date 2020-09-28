from django.contrib import admin
from .models import Questions, Answers, QuestionGroups


class AnswerInline(admin.TabularInline):
    model = Answers


class QuestionsAdmin(admin.ModelAdmin):

    inlines = [AnswerInline]
    exclude = ('user',)
    
    def get_queryset(self, request):
        qs = super(QuestionsAdmin, self).get_queryset(request)
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


class QuestionGroupsAdmin(admin.ModelAdmin):

    class Meta:
        QuestionGroups

admin.site.register(Questions, QuestionsAdmin)
admin.site.register(QuestionGroups, QuestionGroupsAdmin)
