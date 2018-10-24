"use strict";
$(document).ready(function () {
    let table = null;

    $(document).on("mouseenter", ".available", (event) => {
        $(event.target).addClass("mouseover");
    })

    $(document).on("mouseleave", ".available", (event) => {
        $(event.target).removeClass("mouseover");
    })


    $(document).on("click", ".available", (event) => {
        $("#form").fadeIn();
        table = $(event.target);
        if (event.target.tagName === "P") {
            $("#tablenumber").text(`Table Number: ${table.text()}`);
        } else {
            $("#tablenumber").text(`Table Number: ${table.children().text()}`);
        }
    });


    $(document).on("click", "#savebtn", (event) => {
        $("#form").fadeOut();
        if (table.hasClass("available")) {
            table.removeClass("available").addClass("reserved");
        }
        table
            .attr("name", $("input").eq(0).val())
            .attr("sizeofparty", $("input").eq(2).val());
        $("input").each(function () {
            $(this).val("");
        })

    });

    $(document).on("mouseenter", ".reserved", (event) => {
        if ($(event.target).attr("name") && $(event.target).attr("sizeofparty")) {
            $(event.target).append(`
            <section class="tooltip">
                Name: ${$(event.target).attr("name")} <br>
                Size of Party: ${$(event.target).attr("sizeofparty")}
            </section>
            `);
        }
    });

    $(document).on("mouseleave", ".reserved", (event) => {
        $(".tooltip").remove();
    });


    $("#savebtn").on("click", (event) => {
        $("#form").fadeOut();
        if (table.hasClass("available")) {
            table.removeClass("available").addClass("reserved");
        }
    });

    $(document).on("click", "#exit", (event) => {
        $("#form").fadeOut();
    })

});