ALLOWED_HOSTS = ['.vercel.app', 'now.sh', 'localhost', '127.0.0.1']

import os
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles_build', 'static')
