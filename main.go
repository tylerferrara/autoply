package main

import (
	"fmt"
	"net/http"
)

type application struct {
	name string
	age  int
}

func apply(w http.ResponseWriter, req *http.Request) {

	fmt.Fprintf(w, "hello\n")
}

func headers(w http.ResponseWriter, req *http.Request) {

	for name, headers := range req.Header {
		for _, h := range headers {
			fmt.Fprintf(w, "%v: %v\n", name, h)
		}
	}
}

func main() {
	http.HandleFunc("/apply", apply)
	http.ListenAndServe(":8090", nil)
}

func storage() application {
	return application{}
}

func apply() {

}

func visit() {

}

func server() {

}
