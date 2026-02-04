# Update Delay Remotely 

**Goal:** In this project we will be updating the delay period remotely. To achieve this we will learn about https, Arduino programming, and App Script Web Apps.

### Tools
We will be using:
- A ESP32
- A Yellow Led
- A ~218 ohm resistor
- Jumper Cables
- Small bread board

### Wiring 
![ESP32 with Yellow LED](https://github.com/jonss0777/Update_LED_Delay_Remotely/blob/f3449b286f97759d9df148884882e138d0576a16/images/Wiring.jpeg)




### Code Overview
The code connects to the App Script endpoint using the following steps.

1. Connects to WiFi
2. Sets Google Certificate 
3. The micro controller initializes a connection with the script.google server and sends a post request to the App Script endpoint using google certicate. The micro controller then waits for a response.
4. Once the micro controller receives a response from it parses it. It looks at the http code. A 301/302 code means that the client should go to the url in the Location header to find the resource(data).
5. Since the url in Location is in a different server than our original request. We close our current http connection.
6. The micro controller initializes a connection with the script.googleusercontent.com server and sends a get request to the Location url. 
7. The micro controller receives the plain text response and updates the currPeriod variable. 

Web App Code.


The post request writes the previous, current delay period in the micro controller, delay period in the (1,2) cell. Then reads the delay period from the (2,2) cell and sends it back to the micro controller. The micro controller reads it and it updates its currPeriod variable.
