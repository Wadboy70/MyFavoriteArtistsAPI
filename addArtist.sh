#!/usr/bin/env bash

read - p 'Enter artist name: ' name
read - p 'Enter artist description: ' desc

read - p 'Does the artist have any online platforms? [y]es or [n]o' choice
while (($choice != 'y' & $choice != 'Y' & $choice != 'n' & $choice != 'N'))
do
    read - p 'Does the artist have any online platforms? [y]es or [n]o' choice
done

#loop
echo 'Enter name of platform (instagram, facebook, website, etc):'
read platform
echo 'Enter platform url:'
read url
echo 'Does the artist have another platform? [y]es or [n]o'
read choice

echo 'Enter artist nationality (country code):'
read nat

#loop
echo 'Enter name of a medium the artist uses (pen, marker, acrylic, etc):'
read medium
echo 'Does the artist use another medium? [y]es or [n]o'
read choice

#loop
echo 'Enter a subject the artist makes art about (fantasy, war, animals, etc):'
read subject
echo 'Does the artist have another subject matter? [y]es or [n]o'
read choice

echo 'adding to json...'

jq '.' artistList.json
 echo "{
    \"id\": ,
    \"name\": $name,
    \"description\": $desc,
    \"platforms\":[
    ],
    \"nationality\": $nationality
    \"mediums\":[
    ],
    \"subjectMatter\":[
    ]
}"