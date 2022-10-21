using AngularWithGraphQL.DataAccess;
using AngularWithGraphQL.GraphQL;
using AngularWithGraphQL.Interfaces;
using AngularWithGraphQL.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddDbContextFactory<EmployeeDBContext>
    (options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddTransient<IEmployee, EmployeeDataAccessLayer>();

builder.Services.AddGraphQLServer()
    .RegisterService<IEmployee>()
    .RegisterDbContext<EmployeeDBContext>()
    .AddQueryType<EmployeeQueryResolver>()
    .AddMutationType<EmployeeMutationResolver>()
    .AddFiltering();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.UseEndpoints(endpoints =>
{
    endpoints.MapGraphQL();
});

app.MapFallbackToFile("index.html"); ;

app.Run();
