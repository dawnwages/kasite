from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel


class HomePage(Page):
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('body', classname="full"),
    ]


class WhenList(models.Model):
    text = models.TextField(blank=True)
    date = models.DateField(auto_created=True)

class WhatList(models.Model):
    text = models.TextField(blank=True)
    date = models.DateField(auto_created=True)

class WhoList(models.Model):
    text = models.TextField(blank=True)
    date = models.DateField(auto_created=True)