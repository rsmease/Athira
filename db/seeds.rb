# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Service.destroy_all
Review.destroy_all

service1 = Service.create!(
    name: 'Service',
    description: 'Service Description'
)

service2 = Service.create!(
    name: 'Service',
    description: 'Service Description'
)

service3 = Service.create!(
    name: 'Service',
    description: 'Service Description'
)

service4 = Service.create!(
    name: 'Service',
    description: 'Service Description'
)

review1 = Review.create!(
    reviewer_name: 'Reviewer',
    reviewer_description: 'Sr. Director of Operations',
    reviewer_location: 'Company, LLC',
    title: 'Review',
    body: 'Review description, review description review description review description! Review description review description. Review description review description review description.'
)

review2 = Review.create!(
    reviewer_name: 'Reviewer',
    reviewer_description: 'Sr. Director of Operations',
    reviewer_location: 'Company, LLC',
    title: 'Review',
    body: 'Review description, review description review description review description! Review description review description. Review description review description review description.'
)

review3 = Review.create!(
    reviewer_name: 'Reviewer',
    reviewer_description: 'Sr. Director of Operations',
    reviewer_location: 'Company, LLC',
    title: 'Review',
    body: 'Review description, review description review description review description! Review description review description. Review description review description review description.'
)