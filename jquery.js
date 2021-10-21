$(document).ready(() => {
    $.validator.addMethod(
        "letterswithbasicpunc",
        function (value, element) {
            return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
        },
        "Letters or punctuation only please"
    );
    $("#validation").validate({
        rules: {
            nama: {
                required: true,
                letterswithbasicpunc: true,
            },
            harga: {
                required: true,
                digits: true,
                min: 5000,
            },
            barang: {
                required: true,
            },
            kode: {
                required: true,
                digits: true,
                minlength: 10,
            },
        },

        submitHandler: () => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, do it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Submitted!',
                        'Your file has been submitted.',
                        'success'
                    )
                        .then(() => {
                            window.location.replace("https://www.bukalapak.com/");
                        })
                }
            })
        },
    });
})