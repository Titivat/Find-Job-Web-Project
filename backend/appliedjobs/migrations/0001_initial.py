# Generated by Django 3.1.4 on 2020-12-27 08:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('positions', '__first__'),
        ('users', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppliedJob',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_accepted', models.BooleanField(default=False)),
                ('is_rejected', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.employee', verbose_name='Employee applied for a job')),
                ('position', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='positions.position', verbose_name='Job position')),
            ],
            options={
                'verbose_name': 'AppliedJob',
                'verbose_name_plural': 'AppliedJobs',
            },
        ),
    ]
