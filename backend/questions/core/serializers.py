from rest_framework import serializers
from answers.models import Questions, Answers


class AnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answers
        fields = ('question', 'answer_text')


class QuestionsSerializer(serializers.ModelSerializer):
    answers = AnswersSerializer(read_only=True)
    user = serializers.SerializerMethodField()

    def get_user(self, obj):
        return obj.user.username

    class Meta:
        model = Questions
        fields = ('answers', 'user', 'title')
