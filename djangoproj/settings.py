
# Use this to prevent crashes if the key is missing
import os
GOOGLE_API_KEY = os.environ.get('dealershipevaluationproject', 'AIzaSyBQb-OgC9F4xZgqGcQi43KPzVCi2ZGZC8E')

# Allow Vercel hosts
ALLOWED_HOSTS = ['.vercel.app', 'now.sh', 'localhost', '127.0.0.1']

# Static files configuration for Vercel
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles_build', 'static')

# If you are serving the React index.html through Django:
TEMPLATES[0]['DIRS'] = [os.path.join(BASE_DIR, 'server', 'frontend', 'build')]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
