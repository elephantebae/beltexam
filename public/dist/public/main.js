(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-pets/all-pets.component.css":
/*!*************************************************!*\
  !*** ./src/app/all-pets/all-pets.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1wZXRzL2FsbC1wZXRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/all-pets/all-pets.component.html":
/*!**************************************************!*\
  !*** ./src/app/all-pets/all-pets.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>These pets are looking for a home!</p>\n  <a [routerLink]=\"['/create']\">Add a pet to the shelter</a>\n  <table class=\"table table-bordered table-striped\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let pet of allPets\">\n        <td>{{pet.name}}</td>\n        <td>{{pet.petType}}</td>\n        <td><button class=\"btn btn-success ml-2\" (click)=\"details(pet._id)\">Details</button><button class=\"btn btn-primary ml-3\"\n            (click)=\"edit(pet._id)\">Edit</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/all-pets/all-pets.component.ts":
/*!************************************************!*\
  !*** ./src/app/all-pets/all-pets.component.ts ***!
  \************************************************/
/*! exports provided: AllPetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPetsComponent", function() { return AllPetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AllPetsComponent = /** @class */ (function () {
    function AllPetsComponent(_router, _route, _httpService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this.allPets = null;
    }
    AllPetsComponent.prototype.ngOnInit = function () {
        this.findAllPets();
    };
    AllPetsComponent.prototype.findAllPets = function () {
        var _this = this;
        var obs = this._httpService.getAllPets();
        obs.subscribe(function (data) {
            _this.allPets = data;
        });
    };
    AllPetsComponent.prototype.edit = function (id) {
        this._router.navigateByUrl('/pets/edit/' + id);
    };
    AllPetsComponent.prototype.details = function (id) {
        this._router.navigateByUrl('/pets/' + id);
    };
    AllPetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-pets',
            template: __webpack_require__(/*! ./all-pets.component.html */ "./src/app/all-pets/all-pets.component.html"),
            styles: [__webpack_require__(/*! ./all-pets.component.css */ "./src/app/all-pets/all-pets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AllPetsComponent);
    return AllPetsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-pets/all-pets.component */ "./src/app/all-pets/all-pets.component.ts");
/* harmony import */ var _pet_pet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pet/pet.component */ "./src/app/pet/pet.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");







var routes = [
    { path: 'pets', component: _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_4__["AllPetsComponent"] },
    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"] },
    { path: 'pets/:id', component: _pet_pet_component__WEBPACK_IMPORTED_MODULE_5__["PetComponent"] },
    { path: 'pets/edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>Pets</title>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\"\n    crossorigin=\"anonymous\" />\n\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n</head>\n\n<body>\n  <div class=\"container\">\n\n    <h1 class=\"display-4\">Pet Shelter</h1>\n  </div>\n</body>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _pet_pet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pet/pet.component */ "./src/app/pet/pet.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all-pets/all-pets.component */ "./src/app/all-pets/all-pets.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"],
                _pet_pet_component__WEBPACK_IMPORTED_MODULE_9__["PetComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"],
                _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_11__["AllPetsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"display-5\">Know of a pet needing a home?</h3>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div *ngIf=\"error\">\n        <p>{{error.message}}</p>\n      </div>\n      <form (submit)=\"addPet()\">\n        <div class=\"form-group\">\n          <label>Pet Name:</label>\n          <input type=\"text\" name=\"newPet.name\" class=\"form-control\" [(ngModel)]=\"newPet.name\">\n        </div>\n        <div class=\"form-group\">\n          <label>Pet type:</label>\n          <input type=\"text\" name=\"newPet.petType\" class=\"form-control\" [(ngModel)]=\"newPet.petType\">\n        </div>\n        <div class=\"form-group\">\n          <label>Description:</label>\n          <input type=\"text\" name=\"newPet.desc\" class=\"form-control\" [(ngModel)]=\"newPet.desc\">\n        </div>\n        <div class=\"form-group\">\n          <label>Skills: </label>\n          <div class=\"form-group\">\n            <label>Skill 1: <input type=\"text\" class=\"form-control\" name=\"newPet.skill[0].skill1\" [(ngModel)]=\"newPet.skill[0].skill1\"></label>\n          </div>\n          <div class=\"form-group\">\n            <label>Skill 2: <input type=\"text\" class=\"form-control\" name=\"newPet.skill[0].skill2\" [(ngModel)]=\"newPet.skill[0].skill2\"></label>\n          </div>\n          <div class=\"form-group\">\n            <label>Skill 3: <input type=\"text\" class=\"form-control\" name=\"newPet.skill[0].skill3\" [(ngModel)]=\"newPet.skill[0].skill3\"></label>\n          </div>\n        </div>\n        <button class=\"btn btn-primary mt-3 mb-3\" type=\"submit\">Add Pet</button>\n        <button class=\"btn btn-primary mt-3 mb-3 ml-3\" (click)=\"cancel()\">Cancel</button>\n      </form>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateComponent = /** @class */ (function () {
    function CreateComponent(_router, _route, _httpService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this.error = null;
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.newPet = { petType: "", name: "", desc: "", skill: [{ skill1: "", skill2: "", skill3: "" }] };
    };
    CreateComponent.prototype.cancel = function () {
        this._router.navigateByUrl('/pets');
    };
    CreateComponent.prototype.addPet = function () {
        var _this = this;
        var obs = this._httpService.createPet(this.newPet);
        obs.subscribe(function (data) {
            if (data['errors']) {
                _this.error = data;
            }
            else {
                _this.cancel();
                console.log(data);
            }
        });
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"display-4\">Edit this pet</h3>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div *ngIf=\"error\">\n        <p class=\"text-muted\">{{error.message}}</p>\n      </div>\n      <form (submit)=\"update()\">\n        <div class=\"form-group\">\n          <label>Pet name:</label>\n          <input type=\"text\" class=\"form-control\" name=\"editPet.name\" [(ngModel)]=\"editPet.name\">\n        </div>\n        <div class=\"form-group\">\n          <label>Pet type: </label>\n          <input type=\"text\" class=\"form-control\" name=\"editPet.petType\" [(ngModel)]=\"editPet.petType\">\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <input type=\"text\" class=\"form-control\" name=\"editPet.desc\" [(ngModel)]=\"editPet.desc\">\n        </div>\n        <div class=\"form-group\">\n          <label>Skills (optional): </label>\n        </div>\n        <div class=\"row\">\n          <label class=\"ml-4\">Skill 1: </label>\n          <input type=\"text\" class=\"ml-2 form-control\" name=\"editPet.skill[0].skill1\" [(ngModel)]=\"editPet.skill[0].skill1\">\n        </div>\n        <div class=\"row\">\n          <label class=\"ml-4\">Skill 2: </label>\n          <input type=\"text\" class=\"ml-2 form-control\" name=\"editPet.skill[0].skill2\" [(ngModel)]=\"editPet.skill[0].skill2\">\n        </div>\n        <div class=\"row\">\n          <label class=\"ml-4\">Skill 3: </label>\n          <input type=\"text\" class=\"ml-2 form-control\" name=\"editPet.skill[0].skill3\" [(ngModel)]=\"editPet.skill[0].skill3\">\n        </div>\n        <button class=\"btn btn-success mt-3 ml-4\" type=\"submit\">Edit Pet</button>\n        <button class=\"btn btn-success mt-3 ml-3\" (click)=\"cancel()\">Cancel</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditComponent = /** @class */ (function () {
    function EditComponent(_router, _route, _httpService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this.error = null;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editPet = { petType: "", name: "", desc: "", skill: [{ skill1: "", skill2: "", skill3: "" }] };
        this._route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.findEditPet(_this.id);
        });
    };
    EditComponent.prototype.findEditPet = function (id) {
        var _this = this;
        var obs = this._httpService.findPet(id);
        obs.subscribe(function (data) {
            _this.editPet = data;
        });
    };
    EditComponent.prototype.update = function () {
        var _this = this;
        var obs = this._httpService.editPet(this.editPet);
        obs.subscribe(function (data) {
            if (data['errors']) {
                _this.error = data;
                console.log(_this.error);
            }
            else {
                _this.cancel();
            }
        });
    };
    EditComponent.prototype.cancel = function () {
        this._router.navigateByUrl('/pets');
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllPets = function () {
        return this._http.get("/api/allPets");
    };
    HttpService.prototype.createPet = function (newPet) {
        return this._http.post("/api/newPet", newPet);
    };
    HttpService.prototype.findPet = function (id) {
        return this._http.get("/api/" + id);
    };
    HttpService.prototype.like = function (id) {
        return this._http.put("/api/like/" + id, null);
    };
    HttpService.prototype.adopt = function (id) {
        return this._http.delete("/api/" + id);
    };
    HttpService.prototype.editPet = function (editPet) {
        return this._http.put("/api/" + editPet._id, editPet);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/pet/pet.component.css":
/*!***************************************!*\
  !*** ./src/app/pet/pet.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldC9wZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pet/pet.component.html":
/*!****************************************!*\
  !*** ./src/app/pet/pet.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"pet\">\n    <div class=\"card\">\n      <div class=\"card-header display-2\">Details about {{pet.name}}</div>\n      <div class=\"card-body\">\n        <div class=\"d-flex flex-row-reverse\">\n          <button class=\"btn btn-success\" (click)=\"home()\">Home</button>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <h4 class=\"display-5\">Pet Type:</h4>\n          </div>\n          <div class=\"col-6\">\n            <p class=\"text-left\">{{pet.petType}}</p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <h4 class=\"display-5\">Description:</h4>\n          </div>\n          <div class=\"col-6\">\n            <p class=\"text-left\">{{pet.desc}}</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <h4 class=\"display-5\">Skills:</h4>\n          </div>\n          <div class=\"col-6\">\n            <div *ngIf=\"pet.skill[0].skill1\">\n              <div class=\"row\">\n                <p class=\"text-left ml-3\">\n                  {{pet.skill[0].skill1}}</p>\n              </div>\n            </div>\n            <div *ngIf=\"pet.skill[0].skill2\">\n              <div class=\"row\">\n                <p class=\"text-left ml-3\">{{pet.skill[0].skill2}}</p>\n              </div>\n            </div>\n            <div *ngIf=\"pet.skill[0].skill3\">\n              <div class=\"row\">\n                <p class=\"text-left ml-3\">{{pet.skill[0].skill3}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <h4 class=\"display-5\">Likes:</h4>\n          </div>\n          <div class=\"col-6\">\n            <p>{{pet.likes}}</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div *ngIf=\"count == 0\">\n            <button class=\"btn btn-primary mt-2 ml-3\" (click)=\"like(pet._id)\">Like this pet</button>\n          </div>\n          <button class=\"btn btn-success mt-2 ml-5\" (click)=\"adopt(pet._id)\">Adopt this pet!</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pet/pet.component.ts":
/*!**************************************!*\
  !*** ./src/app/pet/pet.component.ts ***!
  \**************************************/
/*! exports provided: PetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetComponent", function() { return PetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PetComponent = /** @class */ (function () {
    function PetComponent(_router, _route, _httpService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this.pet = null;
    }
    PetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.findPet(_this.id);
            _this.count = 0;
        });
    };
    PetComponent.prototype.findPet = function (id) {
        var _this = this;
        var obs = this._httpService.findPet(id);
        obs.subscribe(function (data) {
            console.log("found pet", data);
            _this.pet = data;
        });
    };
    PetComponent.prototype.like = function (id) {
        var _this = this;
        var obs = this._httpService.like(id);
        obs.subscribe(function (data) {
            _this.count = 1;
            _this.findPet(id);
        });
    };
    PetComponent.prototype.adopt = function (id) {
        var _this = this;
        var obs = this._httpService.adopt(id);
        obs.subscribe(function (data) {
            _this._router.navigateByUrl('/pets');
        });
    };
    PetComponent.prototype.home = function () {
        this._router.navigateByUrl('/pets');
    };
    PetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pet',
            template: __webpack_require__(/*! ./pet.component.html */ "./src/app/pet/pet.component.html"),
            styles: [__webpack_require__(/*! ./pet.component.css */ "./src/app/pet/pet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PetComponent);
    return PetComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\downloads\CodingDojo\MEAN\Angular\beltexam\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map