/**
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var request = require("../request");
 
function command(argv,result) {
    var module = argv._[1];
    if (!module) {
        return result.help(command);
    }
    return request.request('/nodes', {
        method: "POST",
        body: JSON.stringify({
            module: module
        })
    }).then(result.logDetails).otherwise(result.warn);
}
command.name = "install";
command.usage = command.name+" <module>";
command.description = "Install the module from NPM";


module.exports = command;
