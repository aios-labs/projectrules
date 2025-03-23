---
description: "ALWAYS use when creating or renaming files, variables, methods, classes, or packages in Java code to ensure consistent naming patterns. This rule enforces Java naming conventions including PascalCase for classes, camelCase for methods and variables, UPPER_SNAKE_CASE for constants, and provides specific guidelines for Spring components."
globs: "*.java"
__meta__type: "guideline"
__meta__repo: "heltondoria/cursor-review"
__meta__tags: ["Java","Naming Conventions","Code Quality","Spring","Best Practices"]
__meta__rate: 8
---
---
guidelines:
  file_and_directory_names:
    title: Nomes de Arquivos e Diretórios
    rules:
      - Arquivos Java devem usar PascalCase e corresponder ao nome da classe principal (UserService.java)
      - Nomes de pacotes devem ser em minúsculas e usar notação de domínio reverso (com.empresa.projeto)
      - Evite abreviações nos nomes de arquivos e diretórios
      - Agrupe arquivos relacionados em diretórios com nomes apropriados

  class_naming:
    title: Nomenclatura de Classes e Interfaces
    rules:
      - Use PascalCase para classes, interfaces, enums e anotações
      - Nomes de classes devem ser substantivos ou frases nominais
      - Interfaces podem ter prefixo "I" (opcional, mas seja consistente)
      - Classes de teste devem terminar com "Test" (UserServiceTest)
    examples:
      correct:
        - "public class UserService {}"
        - "public interface PaymentProcessor {}"
        - "public enum PaymentStatus {}"
      incorrect:
        - "public class userService {}"
        - "public class User_Service {}"
        - "public interface paymentProcessor {}"

  method_naming:
    title: Nomenclatura de Métodos
    rules:
      - Use camelCase para métodos
      - Métodos devem começar com verbo
      - Métodos de acesso devem usar prefixos get/set/is
      - Métodos de teste devem ser descritivos e podem usar underscores para separar partes
    examples:
      correct:
        - "public void processPayment(Payment payment) {}"
        - "public User getUserById(Long id) {}"
        - "public boolean isValid() {}"
      incorrect:
        - "public void ProcessPayment(Payment payment) {}"
        - "public User UserById(Long id) {}"
        - "public boolean valid() {}"

  variable_naming:
    title: Nomenclatura de Variáveis
    rules:
      - Use camelCase para variáveis e parâmetros
      - Nomes devem ser descritivos e revelar intenção
      - Variáveis booleanas devem usar prefixos is/has/should
      - Evite nomes de uma única letra (exceto para índices em loops)
    examples:
      correct:
        - "String userName;"
        - "boolean isActive;"
        - "List<User> activeUsers;"
      incorrect:
        - "String UserName;"
        - "boolean active;"
        - "List<User> u;"

  constant_naming:
    title: Nomenclatura de Constantes
    rules:
      - Use UPPER_SNAKE_CASE para constantes
      - Constantes devem ser declaradas como static final
      - Enums devem usar PascalCase para o tipo e UPPER_SNAKE_CASE para valores
    examples:
      correct:
        - "public static final int MAX_USERS = 100;"
        - "private static final String API_KEY = \"abc123\";"
        - "enum Color { RED, GREEN, BLUE }"
      incorrect:
        - "public static final int maxUsers = 100;"
        - "private static final String apiKey = \"abc123\";"
        - "enum Color { Red, Green, Blue }"

  package_naming:
    title: Nomenclatura de Pacotes
    rules:
      - Use apenas letras minúsculas
      - Use notação de domínio reverso (com.empresa.projeto)
      - Evite underscores ou outros caracteres especiais
    examples:
      correct:
        - "package com.empresa.projeto.usuario;"
        - "package org.exemplo.util;"
      incorrect:
        - "package com.Empresa.Projeto;"
        - "package com.empresa.projeto_usuario;"

  general_guidelines:
    title: Diretrizes Gerais
    rules:
      - Seja consistente em todo o código
      - Use nomes descritivos que revelem intenção
      - Evite abreviações, a menos que sejam universalmente compreendidas
      - Prefira nomes longos e descritivos a nomes curtos e ambíguos
      - Siga o princípio "revelar intenção" do Clean Code

examples:
  bad_practice:
    code: |
      package com.app.Proj;
      
      class data {
          private int d;
          private String s;
          
          public void proc() {
              // código
          }
      }
    issues:
      - Nome do pacote não segue convenção de domínio reverso
      - Nome da classe em minúsculas e não descritivo
      - Variáveis com nomes de uma única letra
      - Nome do método não é descritivo

  good_practice:
    code: |
      package com.company.project.data;
      
      public class UserProfile {
          private int userId;
          private String fullName;
          
          public void processUserData() {
              // código
          }
          
          public String getFullName() {
              return fullName;
          }
      }
    highlights:
      - Nome do pacote segue convenção de domínio reverso
      - Nome da classe em PascalCase e descritivo
      - Variáveis com nomes descritivos em camelCase
      - Métodos com nomes descritivos em camelCase
      - Método getter segue convenção get + nome da propriedade

spring_specific:
  title: Convenções Específicas para Spring
  rules:
    - "Controllers devem terminar com 'Controller' (UserController)"
    - "Services devem terminar com 'Service' (UserService)"
    - "Repositories devem terminar com 'Repository' (UserRepository)"
    - "DTOs devem terminar com 'DTO' (UserDTO)"
    - "Implementações de interfaces podem usar sufixo 'Impl' (UserServiceImpl)"
  examples:
    correct:
      - "@RestController public class ProductController {}"
      - "@Service public class OrderService {}"
      - "@Repository public interface CustomerRepository extends JpaRepository<Customer, Long> {}"
    incorrect:
      - "@RestController public class ProductHandler {}"
      - "@Service public class OrderManager {}"
      - "@Repository public interface CustomerRepo extends JpaRepository<Customer, Long> {}"