import { Controller } from "@hotwired/stimulus";
import axios from "axios"; 


// Connects to data-controller="file-picker"
export default class extends Controller {
    static targets = ["button", "file-input"];

    connect() {
    }

    open() {
        // this.fileInputTarget.click();
    }

    uploadFiles(e){
        const token = document.querySelector('meta[name="csrf-token"]').content; 

        const HEADERS = { 
            'ACCEPT': "text/vnd.turbo-stream.html", 
            'X-CSRF-Token': token 
        }

        console.log("uploadFiles", Array.from(e.target.files));
        console.log(
            e.target.files[0].name,  
            e.target.files[0].size, 
            e.target.files[0].type.split("/")[1]
        )

        axios.post("/api/contents",  {
            name: e.target.files[0].name,  
            file_size: e.target.files[0].size, 
            file_type: e.target.files[0].type.split("/")[1]
        }, { headers: HEADERS })
        .then(response => Turbo.renderStreamMessage(response.data));

    }
}
