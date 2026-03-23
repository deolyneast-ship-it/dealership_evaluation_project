import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoproj.settings')

application = get_wsgi_application()
# Add this line so Vercel can find the entry point
app = application
