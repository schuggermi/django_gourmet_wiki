from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from django.core import validators


class NewUserForm(UserCreationForm):
    email = forms.EmailField(
        required=True,
        label='E-Mail-Adresse*',
        error_messages={
            'required': 'This is a test,'
        },
        validators=[
            validators.EmailValidator(
                message="Invalid Email"
            )
        ],
        widget=forms.EmailInput(
            attrs={
                'class': 'form-input',
                'placeholder': 'E-Mail-Adresse',
            }
        )
    )
    username = forms.CharField(
        required=True,
        label='Benutzername*',
        widget=forms.TextInput(
            attrs={
                'class': 'form-input',
                'placeholder': 'Benutzername',
            }
        )
    )
    password1 = forms.CharField(
        required=True,
        label='Passwort*',
        widget=forms.PasswordInput(
            attrs={
                'class': 'form-input',
                'placeholder': 'Dein Passwort',
            }
        )
    )
    password2 = forms.CharField(
        required=True,
        label='Wiederholtes Passwort*',
        widget=forms.PasswordInput(
            attrs={
                'class': 'form-input',
                'placeholder': 'Wiederhole dein Passwort',
            }
        )
    )

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')


    def save(self, commit=True):
        user = super(NewUserForm, self).save(commit=False)
        user.email = self.cleaned_data['email']

        if commit:
            user.save()
        return user
