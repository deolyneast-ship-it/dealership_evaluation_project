import os

# Allow Vercel hosts
ALLOWED_HOSTS = ['.vercel.app', 'now.sh', 'localhost', '127.0.0.1']

# Static files configuration for Vercel
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles_build', 'static')

# If you are serving the React index.html through Django:
TEMPLATES[0]['DIRS'] = [os.path.join(BASE_DIR, 'server', 'frontend', 'build')]
