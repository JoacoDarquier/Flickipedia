from rest_framework import viewsets
from .serializer import TitleSerializer
from .models import Title

# Create your views here.
class TitleView(viewsets.ModelViewSet):
    serializer_class = TitleSerializer
    queryset = Title.objects.all()