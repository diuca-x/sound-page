# Generated by Django 4.2.6 on 2023-10-18 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('soundback', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='genere',
            name='genere',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='track',
            name='name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='track',
            name='url',
            field=models.CharField(max_length=1000),
        ),
    ]
