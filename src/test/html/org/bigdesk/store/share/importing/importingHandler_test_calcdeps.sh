#!/bin/sh

../../../../../../../../closure-library-r2180/closure/bin/calcdeps.py \
--dep ./../../../../../../../../closure-library-r2180 \
--path ./../../../../../../../main/javascript_sources/org/bigdesk/net \
--path ./../../../../../../../main/javascript_sources/org/bigdesk/store \
--output_mode deps \
> importingHandler_test_deps.js

echo "Generated file: importingHandler_test_deps.js"