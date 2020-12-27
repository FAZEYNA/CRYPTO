       function code() 
        {
            str = document.getElementById('b1').value;
            svg ='';
            for(i=0; i<str.length; i++)
            {
                if(str.charCodeAt(i)>=33 && str.charCodeAt(i)<=79)
                {
                    svg += String.fromCharCode(str.charCodeAt(i)+47);
                }
                else
                {
                    if(str.charCodeAt(i)>=80 && str.charCodeAt(i)<=126)
                    {
                        svg += String.fromCharCode(str.charCodeAt(i)-47);
                    }
                    else
                    {
                        svg += str[i];
                    }
                }
            }
            document.getElementById('b2').value = svg;
        }
           
        function decode()
        {   
            str = document.getElementById('b2').value;
            svg ='';
            for(i=0; i<str.length; i++)
            {
                if(str.charCodeAt(i)>=33 && str.charCodeAt(i)<=79)
                {
                    svg+= String.fromCharCode(str.charCodeAt(i)+47);
                }
                else
                {
                    if(str.charCodeAt(i)>=80 && str.charCodeAt(i)<=126)
                    {
                        svg+= String.fromCharCode(str.charCodeAt(i)-47);
                    }
                    else
                    {
                        svg+= str[i] ;
                    }
                }
            }
            document.getElementById('b1').value = svg;
        }