package main

import (
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

func fibbo(x int) int {
	if x <= 2 {
		return x
	}
	return fibbo(x-2) + fibbo(x-1)
}

func YourHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	num, _ := strconv.Atoi(vars["num"])
	w.Write([]byte(strconv.Itoa(fibbo(num))))
}

func main() {
	r := mux.NewRouter()
	// Routes consist of a path and a handler function.
	r.HandleFunc("/{num}", YourHandler)

	// Bind to a port and pass our router in
	log.Fatal(http.ListenAndServe(":8000", r))
}
