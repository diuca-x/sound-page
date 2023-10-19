# Generated by Django 4.2.6 on 2023-10-19 13:37

from django.db import migrations, models
import django.db.models.functions.text


class Migration(migrations.Migration):

    dependencies = [
        ('soundback', '0010_alter_genere_genere_and_more'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='genere',
            name='unique_upper_genere_category',
        ),
        migrations.AddConstraint(
            model_name='genere',
            constraint=models.UniqueConstraint(django.db.models.functions.text.Lower('genere'), name='unique_lower_genere_category'),
        ),
    ]