from rest_framework import serializers
from answers.models import Question, Answer


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('question', 'answer_text')


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(read_only=True)
    user = serializers.SerializerMethodField()

    def get_user(self, obj):
        return obj.user.username

    class Meta:
        model = Question
        fields = ('answers', 'user', 'title')
