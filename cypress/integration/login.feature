Feature: Fazer Login

    Background:
        Given que está na home

    Scenario: Fazendo login na página   
        When for para página de login
        And digitar o email "gab@email.com" e a senha "teste123" e fazer login
        Then devo ir para página de home