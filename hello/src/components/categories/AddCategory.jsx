import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import Header from '../Header'
import categoryService from '../../service/category.service'

const AddCategory = () => {
    const [category, setCategoryList] = useState({
        name: "",
        description: "",
  
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryList({ ...category, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear the validation error for the current field
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (category.name.trim() === '') {
            newErrors.name = 'Name is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const submitCategory = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return; // Don't submit if the form is not valid
        }
        console.log(category);
        categoryService.saveCategory(category)
            .then((s) => {
                console.log('Category saved successfully:', s.data);
                setMsg('Category saved successfully');
            })
            .catch((error) => {
                console.error('Error saving Category:', error);
                setMsg('Error saving Category');
            });
    };

    const [errors, setErrors] = useState({});
    const [msg, setMsg] = useState("");
    return (
        <>
            <div id="wrapper">
                <SideBar />
                {/* Content Wrapper */}
                <div id="content-wrapper" class="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        <Header />
                        <div class="container-fluid">
                            {/* Page Heading */}
                            <h1 class="h3 mb-2 text-gray-800">Add Category</h1>

                            {/* Display success message if available */}
                            {msg && (
                                <p className="text-center text-success">{msg}</p>
                            )}

                            <form onSubmit={(e) => submitCategory(e)}>
                                <div>
                                    {/* Name field */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputName">Name</label>
                                        <input type="text" name="name" className="form-control"
                                            id="exampleInputName" aria-describedby="emailHelp" value={category.name} onChange={(e) => handleChange(e)} />
                                         {errors.name && <p className="text-danger">{errors.name}</p>}
                                    </div>

                                    {/* Email field */}
                                    <div className="form-group">
                                        <label htmlFor="exampleInputDescription">Description</label>
                                        <input type="text" name="description" className="form-control" id="exampleInputDescription"
                                            value={category.email} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AddCategory