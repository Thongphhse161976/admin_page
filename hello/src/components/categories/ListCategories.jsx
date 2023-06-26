import React, { useEffect, useState } from 'react'
import Header from "../Header";
import SideBar from "../SideBar";
import categoryService from '../../service/category.service';
const ListCategories = () => {


    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        categoryService.getAllCategories().then((res) => {
            console.log(res.data);

            setCategoryList(res.data);
        }).catch((error) => {
            console.log(error);
            console.log('lol');
        });
    }, []);

    return (
        <>
            {/* Page Wrapper */}

            <div id="wrapper">
                <SideBar />
                {/* Content Wrapper */}

                <div id="content-wrapper" class="d-flex flex-column">
                    {/* Main Content */}

                    <div id="content">
                        <Header />
                        <div class="container-fluid">

                            {/* Page Heading */}

                            <h1 class="h3 mb-2 text-gray-800">List Categories</h1>


                            {/* DataTales Example */}

                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {

                                                    categoryList.map((e) => (

                                                        <tr>
                                                            <td key={e.id}>{e.id}</td>
                                                            <td key={e.name}>{e.name}</td>
                                                            <td key={e.description}>{e.description}</td>
                                                            <td key={e.product}>{e.product}</td>
                                                        </tr>
                                                    ))

                                                }



                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* /.container-fluid */}

                    </div>
                </div>
            </div>

        </>
    )
}

export default ListCategories