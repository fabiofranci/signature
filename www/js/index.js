/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
$(document).ready(function() {
    // are we running in native app or in a browser?
    window.isphone = false;
    if(document.URL.indexOf("http://") === -1
        && document.URL.indexOf("https://") === -1) {
        window.isphone = true;
    }

    if( window.isphone ) {
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        onDeviceReady();
    }
});

function onDeviceReady() {
    alert("Ci siamo");
    $("#FINE_VISITA").on('click',function(){
        alert("OK! Tutte le postazioni sono state visitate! Compila il modulo del certificato!");
        //devo fare l'update su visite e poi chiamare genera certificati
        location.href="#fine_visita";
    });

    $(document).on("pageshow","#fine_visita",function(){ // When entering pagetwo
        $('#fcmsig').jSignature({'UndoButton':false,color:"#000000",lineWidth:1});
    });



}
