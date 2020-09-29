# Modern Artist API

I really like art so I thought it would be cool to have an API of \~living\~ artists that I can use for future projects!

## Production host


`Access-Control-Allow-Origin` is set to `*`, so  you can make requests from any domain.

## API

### `GET /`

Returns a list of the endpoints:

`
'use /name/:name, /platform/:platform, /nationality/:nationality, /medium/:medium, /random or /random/:random (value preceded by colon signified search value :D)'
`
### `GET /all`

Returns an object containing all entries:

```json
{
    "artistName": {
        "id": "1",
        "name": "seyi",
        "description": "rlly good at javascript :)",
        "platforms": [
            {
                "platform": "instagram",
                "url": "https://www.instagram.com/wadboy/"
            }
        ],
        "nationality": "GB",
        "mediums": [
            "pen",
            "pencil"
        ],
        "subjectMatter": [
            "surreal",
            "anatomy",
            "perspective"
        ]
    },
    "artist2": {
        
    }
}
```

### `GET /name/:name`

Returns an array of all entries containing name search value:

`/name/bob`

```json
    [
        {
            "name": "bobby",
            
        },
        {
            "name": "bobette",
            
        },
        
    ]
```

### `GET /platform/:platform`

Returns an array of all entries containing platform search value:

`/platform/instagram`

```json
    [
        {
            "name": "seyi",
            "platforms": [
                {
                    "platform": "instagram" ,
                    "url": "https://instagram.com/wadboy"
                },
                
            ]
        }
    ]

```


### `GET /nationality/:nationality`

Returns an array of all entries containing nationality search value:

`/nationality/UK`

```json
    [
        {
            "name": "seyi",
            "nationality": "GB"
        }
    ]
```
nationality contains the alpha-2 code of the artists home country


### `GET /medium/:medium`

Returns an array of all entries containing medium search value:

`/medium/pen`

```json
    [
        {
            "name": "seyi",
            "mediums": [
                "pen",
                "watercolor"
            ]
        }
    ]
```


### `GET /random`

Returns an random artist object:
```json
{
    "name": "randomArtist",
    
}
```

### `GET /random/:random`

Returns an random OBJECT of artist objects containing the specified value (if less are available than the specified value, all artists will be returned):

`/random/2'

```json
{
    "randomartist1":{
        
    },
    "randomartist2":{
        
    }
}
```


## Local development

Once you've cloned this repo, run `yarn i` to install the dependencies.

Then you can run:

* `yarn start`: runs the compiled server

:) happy coding!
