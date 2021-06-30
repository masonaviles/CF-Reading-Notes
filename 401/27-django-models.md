# Using Models
- To be able to design and create your own models, choosing fields appropriately.
- Models define the structure of stored data, including the field types and possibly also their maximum size, default values, selection list options, help text for documentation, label text for forms, etc

Models are usually defined in an application's models.py file. They are implemented as subclasses of django.db.models.Model, and can include fields, methods and metadata. The code fragment below shows a "typical" model, named MyModelName:

```
from django.db import models

class MyModelName(models.Model):
    """A typical class defining a model, derived from the Model class."""

    # Fields
    my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
    ...

    # Metadata
    class Meta:
        ordering = ['-my_field_name']

    # Methods
    def get_absolute_url(self):
        """Returns the url to access a particular instance of MyModelName."""
        return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.my_field_name
```
- Fields
- Metadata
- Methods



# Django Admin
    Advanced configuration section is optional
    The tutorial is really good but some of the tools are dated so when reading try to understand the concepts more than the code.

    - The Django admin application can use your models to automatically build a site area that you can use to create, view, update, and delete records.
    - how to set up the administration site in both its simplest and improved form, how to create a superuser, and how to navigate the admin site and view, delete, and update records. Along the way you've created a bunch of Books, BookInstances, Genres, and Authors that we'll be able to list and display once we create our own view and templates.