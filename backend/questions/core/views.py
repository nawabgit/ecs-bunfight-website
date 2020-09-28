from answers.models import Questions, Answers
from rest_framework import viewsets
from rest_framework import permissions
from core.serializers import QuestionsSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Questions.objects.all()
    serializer_class = QuestionsSerializer
    permission_classes = [permissions.IsAuthenticated]