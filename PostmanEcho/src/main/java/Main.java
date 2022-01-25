public class Main {
    // Given - When - Then
// Предусловия
    given()
  .baseUri("https://postman-echo.com")
  .body("some data") // отправляемые данные (заголовки и query можно выставлять аналогично)
// Выполняемые действия
.when()
  .post("/post")
// Проверки
.then()
  .statusCode(200)
  .body(matchesJsonSchemaInClasspath("accounts.schema.json"))
            ;
}
if not in English
    given()
  .baseUri("https://postman-echo.com")
          .contentType("text/plain; charset=UTF-8")
          .body("some data")
          .when()
          .post("/post")
          .then()
          .statusCode(200)
          .body(/* --> ваша проверка здесь <-- */)
          ;
.body("data", equalTo("some value"))