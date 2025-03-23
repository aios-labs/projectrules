---
description: "This rule file establishes comprehensive standards for Java method development and exception handling in Spring Boot and Quarkus applications, covering method design principles, error management patterns, and framework-specific error handling best practices."
globs: "*.java"
__meta__type: "guideline"
__meta__repo: "heltondoria/cursor-review"
__meta__framework: "Spring Boot"
__meta__tags: ["Java","Exception Handling","Spring Boot","Quarkus","Best Practices"]
__meta__rate: 7.5
---
<?xml version="1.0" encoding="UTF-8"?>
<rule>
  <metadata>
    <n>function_error_standards</n>
    <description>This rule file establishes comprehensive standards for Java method development and exception handling in Spring Boot and Quarkus applications, covering method design principles, error management patterns, and framework-specific error handling best practices.</description>
    <priority>high</priority>
    <version>1.0</version>
  </metadata>

  <filters>
    <filter>
      <type>file_extension</type>
      <pattern>\\*.java$</pattern>
    </filter>
  </filters>

  <actions>
    <action>
      <type>suggest</type>
      <message>
        <guidelines>
          <method_guidelines>
            <title>Diretrizes para Métodos</title>
            <standards>
              <standard>
                <name>single_responsibility</name>
                <description>Mantenha métodos pequenos e focados (responsabilidade única)</description>
                <required>true</required>
                <rationale>Métodos devem fazer uma coisa e fazê-la bem</rationale>
              </standard>
              <standard>
                <name>naming</name>
                <description>Use nomes descritivos (verbo + substantivo)</description>
                <required>true</required>
                <examples>
                  <correct>processUserData, validateInput, fetchResults</correct>
                  <incorrect>process, doStuff, handle</incorrect>
                </examples>
              </standard>
              <standard>
                <name>method_length</name>
                <description>Métodos não devem ultrapassar 30 linhas</description>
                <required>false</required>
                <rationale>Métodos longos são difíceis de entender e testar</rationale>
              </standard>
              <standard>
                <name>parameter_handling</name>
                <description>Valide parâmetros no início do método</description>
                <required>true</required>
                <example>
                  if (data == null) {
                      throw new IllegalArgumentException("Data cannot be null");
                  }
                </example>
              </standard>
              <standard>
                <name>documentation</name>
                <description>Documente com JavaDoc</description>
                <required>true</required>
                <reference>documentation_standards</reference>
              </standard>
              <standard>
                <name>nesting</name>
                <description>Evite aninhar métodos mais de 2 níveis</description>
                <required>true</required>
                <rationale>Mantém a legibilidade do código e reduz a complexidade</rationale>
              </standard>
              <standard>
                <name>early_return</name>
                <description>Retorne cedo para evitar aninhamento profundo</description>
                <required>true</required>
                <example>
                  if (!isValid) return;
                  // resto do método
                </example>
              </standard>
            </standards>
          </method_guidelines>

          <error_handling>
            <title>Tratamento de Exceções</title>
            <standards>
              <standard>
                <name>unchecked_exceptions</name>
                <description>Prefira exceções não verificadas (unchecked) para erros recuperáveis</description>
                <required>true</required>
                <rationale>Exceções verificadas forçam tratamento de erro em locais onde pode não ser apropriado</rationale>
                <example><![CDATA[
// Prefira
throw new IllegalArgumentException("ID de usuário inválido: " + userId);

// Em vez de
throw new InvalidUserIdException("ID de usuário inválido: " + userId);
]]></example>
              </standard>
              <standard>
                <name>custom_exceptions</name>
                <description>Crie classes de exceção personalizadas para tipos específicos de erro</description>
                <required>true</required>
                <example><![CDATA[
public class ResourceNotFoundException extends RuntimeException {
    private final String resourceType;
    private final String resourceId;

    public ResourceNotFoundException(String resourceType, String resourceId) {
        super(String.format("%s com ID %s não encontrado", resourceType, resourceId));
        this.resourceType = resourceType;
        this.resourceId = resourceId;
    }

    public String getResourceType() {
        return resourceType;
    }

    public String getResourceId() {
        return resourceId;
    }
}]]></example>
              </standard>
              <standard>
                <name>error_logging</name>
                <description>Registre erros com contexto adequado</description>
                <required>true</required>
                <example>log.error("Falha ao processar dados do usuário: {}", userId, exception);</example>
              </standard>
              <standard>
                <name>error_messages</name>
                <description>Use mensagens de erro significativas</description>
                <required>true</required>
                <examples>
                  <correct>"Formato de ID de usuário inválido: esperado UUID"</correct>
                  <incorrect>"Entrada inválida"</incorrect>
                </examples>
              </standard>
              <standard>
                <name>exception_wrapping</name>
                <description>Não engula exceções silenciosamente</description>
                <required>true</required>
                <example><![CDATA[
// RUIM
try {
    // código que pode lançar exceção
} catch (Exception e) {
    // nada aqui!
}

// BOM
try {
    // código que pode lançar exceção
} catch (Exception e) {
    log.error("Operação falhou", e);
    throw new ServiceException("Não foi possível completar a operação", e);
}
]]></example>
              </standard>
            </standards>
          </error_handling>

          <spring_error_handling>
            <title>Tratamento de Exceções no Spring Boot</title>
            <standards>
              <standard>
                <name>controller_advice</name>
                <description>Use @ControllerAdvice ou @RestControllerAdvice para tratamento centralizado de exceções</description>
                <required>true</required>
                <example><![CDATA[
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFound(ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(ValidationException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Ocorreu um erro interno no servidor",
            LocalDateTime.now()
        );
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
]]></example>
              </standard>
              <standard>
                <name>error_response</name>
                <description>Padronize estruturas de resposta de erro</description>
                <required>true</required>
                <example><![CDATA[
public class ErrorResponse {
    private final int status;
    private final String message;
    private final LocalDateTime timestamp;
    private List<String> details;

    public ErrorResponse(int status, String message, LocalDateTime timestamp) {
        this.status = status;
        this.message = message;
        this.timestamp = timestamp;
    }

    public ErrorResponse(int status, String message, LocalDateTime timestamp, List<String> details) {
        this.status = status;
        this.message = message;
        this.timestamp = timestamp;
        this.details = details;
    }

    // getters
}
]]></example>
              </standard>
              <standard>
                <name>validation_errors</name>
                <description>Trate erros de validação do Bean Validation</description>
                <required>true</required>
                <example><![CDATA[
@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<ErrorResponse> handleValidationErrors(MethodArgumentNotValidException ex) {
    List<String> details = ex.getBindingResult()
        .getFieldErrors()
        .stream()
        .map(error -> error.getField() + ": " + error.getDefaultMessage())
        .collect(Collectors.toList());

    ErrorResponse error = new ErrorResponse(
        HttpStatus.BAD_REQUEST.value(),
        "Erro de validação",
        LocalDateTime.now(),
        details
    );
    
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
}
]]></example>
              </standard>
            </standards>
          </spring_error_handling>

          <quarkus_error_handling>
            <title>Tratamento de Exceções no Quarkus</title>
            <standards>
              <standard>
                <name>exception_mappers</name>
                <description>Use Exception Mappers para tratamento centralizado de exceções em APIs JAX-RS</description>
                <required>true</required>
                <example><![CDATA[
@Provider
public class ResourceNotFoundExceptionMapper implements ExceptionMapper<ResourceNotFoundException> {
    
    @Override
    public Response toResponse(ResourceNotFoundException exception) {
        ErrorResponse error = new ErrorResponse(
            Response.Status.NOT_FOUND.getStatusCode(),
            exception.getMessage(),
            LocalDateTime.now()
        );
        
        return Response.status(Response.Status.NOT_FOUND)
                .entity(error)
                .build();
    }
}
]]></example>
              </standard>
              <standard>
                <name>validation_exception_mapper</name>
                <description>Crie um ExceptionMapper para erros de validação</description>
                <required>true</required>
                <example><![CDATA[
@Provider
public class ValidationExceptionMapper implements ExceptionMapper<ConstraintViolationException> {
    
    @Override
    public Response toResponse(ConstraintViolationException exception) {
        List<String> errors = exception.getConstraintViolations()
                .stream()
                .map(violation -> violation.getPropertyPath() + ": " + violation.getMessage())
                .collect(Collectors.toList());
                
        ErrorResponse error = new ErrorResponse(
            Response.Status.BAD_REQUEST.getStatusCode(),
            "Erro de validação",
            LocalDateTime.now(),
            errors
        );
        
        return Response.status(Response.Status.BAD_REQUEST)
                .entity(error)
                .build();
    }
}
]]></example>
              </standard>
              <standard>
                <name>openapi_documentation</name>
                <description>Documente adequadamente os códigos de erro em APIs usando OpenAPI/Swagger</description>
                <required>true</required>
                <example><![CDATA[
@APIResponse(
    responseCode = "404",
    description = "Recurso não encontrado",
    content = @Content(
        mediaType = MediaType.APPLICATION_JSON,
        schema = @Schema(implementation = ErrorResponse.class)
    )
)
@APIResponse(
    responseCode = "400",
    description = "Requisição inválida",
    content = @Content(
        mediaType = MediaType.APPLICATION_JSON,
        schema = @Schema(implementation = ErrorResponse.class)
    )
)
@GET
@Path("/{id}")
public Response getResource(@PathParam("id") Long id) {
    // implementação
}
]]></example>
              </standard>
            </standards>
          </quarkus_error_handling>

          <reactive_error_handling>
            <title>Tratamento de Erros em Programação Reativa</title>
            <standards>
              <standard>
                <name>reactive_error_operators</name>
                <description>Use operadores específicos para tratamento de erro em fluxos reativos</description>
                <required>true</required>
                <example><![CDATA[
// Spring WebFlux
return userService.findById(userId)
    .switchIfEmpty(Mono.error(new ResourceNotFoundException("User", userId)))
    .onErrorResume(DataAccessException.class, ex -> {
        log.error("Erro de acesso a dados ao buscar usuário: {}", userId, ex);
        return Mono.error(new ServiceException("Falha ao acessar dados do usuário", ex));
    });

// Mutiny (Quarkus)
return userService.findById(userId)
    .onItem().ifNull().failWith(() -> new ResourceNotFoundException("User", userId))
    .onFailure(DataAccessException.class).transform(ex -> {
        log.error("Erro de acesso a dados ao buscar usuário: {}", userId, ex);
        return new ServiceException("Falha ao acessar dados do usuário", ex);
    });
]]></example>
              </standard>
              <standard>
                <name>reactive_error_handling_principles</name>
                <description>Falhe rápido e forneça informações úteis em erros reativos</description>
                <required>true</required>
                <example><![CDATA[
// Bom exemplo
return Flux.fromIterable(ids)
    .flatMap(id -> {
        if (!isValidId(id)) {
            return Mono.error(new ValidationException("ID inválido: " + id));
        }
        return repository.findById(id);
    })
    .onErrorMap(DataAccessException.class, ex -> 
        new ServiceException("Erro ao acessar banco de dados", ex));
]]></example>
              </standard>
            </standards>
          </reactive_error_handling>
        </guidelines>
      </message>
    </action>
  </actions>

  <examples>
    <example>
      <title>Implementação de Serviço Spring</title>
      <description>Exemplo de serviço com tratamento adequado de exceções</description>
      <bad_practice>
        <code><![CDATA[
@Service
public class UserService {
    public User process(String id, String name, int age, String email) {
        try {
            // ... código
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }
}]]></code>
        <explanation>
          <issue>Usa parâmetros posicionais em vez de objeto DTO</issue>
          <issue>Engole exceções e retorna null</issue>
          <issue>Usa System.out.println para log de erros</issue>
          <issue>Não fornece informações úteis sobre o erro</issue>
        </explanation>
      </bad_practice>
      <good_practice>
        <code><![CDATA[
@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final UserRepository userRepository;
    
    /**
     * Processa os dados do usuário e cria um novo registro
     *
     * @param request Dados do usuário a serem processados
     * @return O usuário criado
     * @throws ValidationException Se os dados do usuário forem inválidos
     * @throws ResourceAlreadyExistsException Se um usuário com o mesmo email já existir
     */
    public User createUser(CreateUserRequest request) {
        // Validações iniciais
        if (request == null) {
            throw new IllegalArgumentException("Request não pode ser nulo");
        }
        
        // Verifica se email já existe
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ResourceAlreadyExistsException(
                "User", "email", request.getEmail());
        }
        
        try {
            User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .age(request.getAge())
                .createdAt(LocalDateTime.now())
                .build();
                
            return userRepository.save(user);
        } catch (DataAccessException e) {
            log.error("Erro ao salvar usuário no banco de dados: {}", request.getEmail(), e);
            throw new ServiceException("Não foi possível criar o usuário", e);
        }
    }
}]]></code>
        <highlights>
          <highlight>Usa objeto DTO para parâmetros</highlight>
          <highlight>Tratamento adequado de exceções com contexto</highlight>
          <highlight>Usa logging apropriado</highlight>
          <highlight>Lança exceções específicas com mensagens claras</highlight>
          <highlight>Documenta exceções no JavaDoc</highlight>
        </highlights>
      </good_practice>
    </example>
    
    <example>
      <title>Controlador REST com Tratamento de Exceções</title>
      <bad_practice>
        <code><![CDATA[
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    
    @PostMapping
    public User createUser(@RequestBody Map<String, Object> userData) {
        try {
            return userService.createUser(userData);
        } catch (Exception e) {
            e.printStackTrace();
            return null; // Retornar 200 OK com null no corpo
        }
    }
}]]></code>
        <explanation>
          <issue>Usa Map genérico em vez de DTO tipado</issue>
          <issue>Imprime stack trace no console</issue>
          <issue>Retorna null com status 200 em caso de erro</issue>
          <issue>Não usa anotações de validação</issue>
        </explanation>
      </bad_practice>
      <good_practice>
        <code><![CDATA[
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    
    @PostMapping
    @Operation(summary = "Cria um novo usuário", 
               description = "Cria um novo usuário com os dados fornecidos")
    @APIResponses(value = {
        @APIResponse(responseCode = "201", 
                     description = "Usuário criado com sucesso"),
        @APIResponse(responseCode = "400", 
                     description = "Dados de entrada inválidos"),
        @APIResponse(responseCode = "409", 
                     description = "Usuário com este email já existe")
    })
    public ResponseEntity<UserResponseDTO> createUser(
            @Valid @RequestBody CreateUserRequest request) {
        
        User createdUser = userService.createUser(request);
        UserResponseDTO response = mapper.toResponseDTO(createdUser);
        
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}]]></code>
        <highlights>
          <highlight>Usa DTO tipado com validação</highlight>
          <highlight>Retorna ResponseEntity com status HTTP apropriado</highlight>
          <highlight>Documenta a API com anotações Swagger/OpenAPI</highlight>
          <highlight>Delega tratamento de exceções para @ControllerAdvice</highlight>
          <highlight>Usa injeção de dependência via construtor</highlight>
        </highlights>
      </good_practice>
    </example>
  </examples>
</rule>