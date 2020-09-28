from answers.models import Question, Answer
from rest_framework import viewsets
from rest_framework import permissions
from core.serializers import QuestionSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticated]