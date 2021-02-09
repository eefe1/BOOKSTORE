

async componentDiMount(){
    const baseURL =  "http://localhost:3002/books";
    const response = await fetch(baseURL);
    console.log(response)
    const data = await response.json();
    console.log(data)
    this.setState({books: data})
}