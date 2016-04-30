#! /bin/bash
echo "--------------------------------------------------------------------------"
echo "Forces recompilation for production or export to AWS S3 static web hosting"
echo "  * needed to get read of the autoreload features "
echo "  * for some reason, the 'npm build' does not force recompilation "
echo "--------------------------------------------------------------------------"
./node_modules/.bin/brunch b --production
