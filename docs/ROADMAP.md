# Project Roadmap

## Development Environment

<!--
<div hidden>

```
@startuml actual
!include <C4/C4_Container>
LAYOUT_LEFT_RIGHT()

Person(admin, "Student")
System_Boundary(c1, "PC 127.0.0.1") {
    Container(turbowarp, "Turbowarp Robomater extension", "JavaScript", "Just to link blocks with python api")
    Container(api_app, "Flask API", "Python,  Flask library", "Get request from turbowarp and communicate with the robot")
}
System(robot, "Robot", "192.168.2.1, ap mode")

Rel(admin, turbowarp, "Uses", "HTTP")
Rel(turbowarp, api_app, "Send request to api", "HTTP")
Rel(api_app, robot, "Send socket to robot", "UDP")
Rel(api_app, turbowarp, "Send response to know if it works")

SHOW_LEGEND()
@enduml
```
</div>
-->

![](./diagrams/actual.svg)

## Production Environment

<!--
<div hidden>

```
@startuml expected
!include <C4/C4_Container>
LAYOUT_LEFT_RIGHT()

Person(admin, "Student")
System_Boundary(c1, "PC 127.0.0.1") {
    Container(turbowarp, "Turbowarp Robomater extension", "JavaScript", "Just to link blocks with python api")
}
System_Boundary(c2, "ISEP Network") {
    Container(api_app, "Flask API", "Python,  Flask library", "Get request from turbowarp and communicate with the robot")
    System(robot, "Robot", "192.168.1-255.1-255, sta mode")
}



Rel(admin, turbowarp, "Uses", "HTTP")
Rel(turbowarp, api_app, "Send request to api", "HTTP")
Rel(api_app, robot, "Send socket to robot", "UDP")
Rel(api_app, turbowarp, "Send response to know if it works")

SHOW_LEGEND()
@enduml
```

</div>
-->

![](./diagrams/expected.svg)