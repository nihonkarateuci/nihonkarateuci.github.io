echo "Updating file permissions"
for file in $(find ./images -maxdepth 3);
do
    if [ -d file ];
    then
        chmod 755 $file
    else
        chmod 644 $file
    fi
done
chmod 644 ./*.html
chmod 755 ./scripts
chmod 644 ./scripts/*.js
chmod 755 ./styles
chmod 644 ./styles/*.css
echo "Finished updating file permissions"
