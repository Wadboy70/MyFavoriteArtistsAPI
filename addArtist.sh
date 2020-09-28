#!/usr/bin/env bash

echo 'Enter artist name:'
read name
echo 'Enter artist description:'
read desc

echo 'Does the artist have any online platforms? [y]es or [n]o'
read choice
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
