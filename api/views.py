from . import models, serializers
from rest_framework import status, generics, views, response


class EntriesView(views.APIView):
    def get(self, request):
        entryList = models.Entry.objects.all()
        serializer = serializers.EntryListSerializer(entryList, many=True)
        return response.Response(serializer.data)

class CreateEntry(generics.CreateAPIView):
    queryset = models.Entry.objects.all()
    serializer_class = serializers.CreateEntrySerializer

# class CreateEntry(views.APIView):
#     def post(self, request):
#         pass
#     serializer_class = serializers.EntryListSerializer
