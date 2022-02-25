# REST

_To start understanding the concept of REST, let's first remember the origin of data transferring._

## ARPANET

This was a project from the USA government with the mere purpose of transferring data basically to increase the security level that they had with their files, so no one can destroy a single building and also destroy all the data.

They successfully did it with this ARPANET project, retired in 1990 when the USA government started the expansion of this technology thanks to private entities putting money to create the internet. Alright, then, so how were they able to transfer information back then? Something called **TCP/IP** was the first stable protocol for transferring data.

### 90's

During this decade the explosion of the internet arrived at developed lands, so far, everything was a mess, what I mean is that there was no standardization of tech stack like nowadays and among that spaghetti was also the protocols for transferring data. Until this guy, Roy Fielding introduced _(in 2000)_ what will be the standard protocol for the World Wide Web, the famous **HTTP**, and later **HTTPS**.

## REST

When HTTP was introduced... it also came the REST _(representational state transfer)_ architecture that provides the next verbs:

| HTTP methods | C.R.U.D |
| ----------: | :---|
| POST | **C**reate |
| GET | **R**ead |
| PUT | **U**pdate / replace |
| PATCH | **U**pdate / modify |
| POST | **D**elete |

As seen above, REST implements the CRUD principles that are the basic manipulation of data. REST has its own principles, and those are:

* **Stateless -** Meaning that it shouldn't be any context during this communication between the client-server, in other words, previous requests will not affect the future request so there aren't retained any session information
* **Cacheable -** The client, the server, and any intermediary components can all cache resources to improve performance
* **Client-Server -** Should obey the web model client (browser / end-user) server (the machine that host the database on the internet)
* **Layered System -** The server should be built in layers, this is good because increases the security and allows scalability in the business logic
* **Uniform Interface -** Simply allows the various components to have the same language between them
* **Code on Demand (optional) -** Temporarily extend or customize the functionality of a client by transferring executable code

## JSON and XML

JavaScript Object Notation & Extensible Markup Language are the frequent files extension used to transfer the information, information that will follow the HTTP protocol based on REST architecture.

_*JSON (first) is much more used than XML (second)_

```json
[
	{
		"name":"Tim",
		"last_name":"Cook"
	},
	{
		"name":"Steve",
		"last_name":"Palmer"
	}
]
```

```xml
<?xml version="1.0" encoding="UTF-7" ?>
<personList>
    <person> 
        <name>Tim</name>
        <last-name>Cook</last-name>
    </person>
    <person> 
        <name>Steve</name>
        <last-name>Palmer</last-name>
    </person>
</personList>
```