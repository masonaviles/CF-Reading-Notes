# Configuring Django Settings: Best Practices

### Managing Django Settings: Issues
- Different environments
- Sensitive data
- Sharing settings between team members
- Django settings are a Python code
### Setting Configuration: Different Approaches
- settings_local.py
  - Pros:
      - Secrets not in VCS.
  - Cons:
      - settings_local.py is not in VCS, so you can lose some of your Django environment settings.
      - The Django settings file is a Python code, so settings_local.py can have some non-obvious logic.
      - You need to have settings_local.example (in VCS) to share the default configurations for developers.
```
ALLOWED_HOSTS = ['example.com']
DEBUG = False
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'production_db',
        'USER': 'user',
        'PASSWORD': 'password',
        'HOST': 'db.example.com',
        'PORT': '5432',
        'OPTIONS': {
            'sslmode': 'require'
        }
    }
}

...

from .settings_local import *
```
```
ALLOWED_HOSTS = ['localhost']
DEBUG = True
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'local_db',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
```
- Separate Settings File for Each Environment
  - Pros:
      - All environments are in VCS.
      - It’s easy to share settings between developers.
  - Cons:
      - You need to find a way to handle secret passwords and tokens.
      - “Inheritance” of settings can be hard to trace and maintain.
- Environment Variables
  - Pros:
      - Configuration is separated from code.
      - Environment parity – you have the same code for all environments.
      - No inheritance in settings, and cleaner and more consistent code.
      - There is a theoretical grounding for using environment variables – 12 Factors.
  - Cons:
      - You need to handle sharing default config between developers.
### 12 Factors
- Codebase
- Dependencies
- Config
- Backing services
- Build, release, run
- Processes
- Port binding
- Concurrency
- Disposability
- Dev/prod parity
- Logs
- Admin processes
### django-environ
### Setting Structure
### Naming conventions
### Django Settings: Best Practices
- Keep settings in environment variables.
- Write default values for production configuration (excluding secret keys and tokens).
- Don’t hardcode sensitive settings, and don’t put them in VCS.
- Split settings into groups: Django, third-party, project.
- Follow naming conventions for custom (project) settings.

# How Does SSH Work

### What is SSH
SSH, or Secure Shell, is a remote administration protocol that allows users to control and modify their remote servers over the Internet.

### How Does SSH Work

### Understanding Different Encryption Techniques
Symmetrical encryption
Asymmetrical encryption
Hashing

