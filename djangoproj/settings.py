import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

# Point Django to the React build folder
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'server/frontend/build')],
        'APP_DIRS': True,
        # ... rest of options
    },
]

# Essential for Vercel static files
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles_build', 'static')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'server/frontend/build/static'),
]
