'use strict';

handlers.getData = async () => new Promise((resolve, reject) => setTimeout(reject, 100, new Error('error version 3')));
