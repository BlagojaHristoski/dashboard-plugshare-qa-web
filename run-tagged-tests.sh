#/bin/bash

# run tests that have these tags in any order
# example: ./run-tagged-tests.sh @smoke @getSitesForMobile

tagsGrep=""

for tag in "$@"
do
   tagsGrep=$tagsGrep"(?=.*$tag)"
done

yarn test --grep $tagsGrep
