# jsonhelper
select json easy
### install
```
npm install jsonhelper
```

### how to use ?

1) reuire :
```
var JsonHelper=require('jsonhelper');
```
2):codeing here:
```
var array=JsonHelper.set(
    {
        books:[
            {
                name:'tom and jerry'
            },
            {
                name:'who is the king'
            },
            {
                name:'haha'
            }
        ]
    }
).select("name").join(
    {
        a:[
            1,2,3
        ],
        b:{
            c:[4,5,6]
        }
    }
).toArray();
```

### test
```
npm test
```