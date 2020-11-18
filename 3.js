function chess(){
    for(let row = 0; row < 8; row++){
        let rowText = "";
        for(let col = 0; col < 8; col++){
            if ((col+row) % 2 == 0) rowText += " ";
            else rowText += "#";
        }
        console.log(rowText);
    }
}

chess();