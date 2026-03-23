# 1. Allow Vercel to talk to the app
ALLOWED_HOSTS = ['.vercel.app', 'localhost', '127.0.0.1', '*']

# 2. Use a dummy database to prevent "Connection Refused" crashes
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# 3. Add WhiteNoise for static files (prevents CSS/JS crashes)
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware', # Add this right here!
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
]
