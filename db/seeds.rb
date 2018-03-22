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
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
)

service2 = Service.create!(
    name: 'Curabitur Faucibus',
    description: 'Sed enim mauris, egestas non iaculis vel, lobortis eu odio'
)

service3 = Service.create!(
    name: 'Donec Fermentum',
    description: 'Suspendisse potenti, nunc posuere fermentum augue quis bibendum'
)

service4 = Service.create!(
    name: 'Vivamus Enim',
    description: 'Cras et dignissim dolor, non malesuada neque'
)

review1 = Review.create!(
    reviewer_name: 'Marius',
    reviewer_description: 'Sr. Director of Giving',
    reviewer_location: 'Suspendisse Potenti, LLC',
    title: 'Lorem Ipsum',
    body: 'Nullam congue metus quis varius commodo. Praesent fringilla turpis sem, ut pretium massa elementum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
)

review2 = Review.create!(
    reviewer_name: 'Domitia',
    reviewer_description: 'CEO',
    reviewer_location: 'Cras Hendrerit, Inc',
    title: 'Eros Nisi',
    body: 'Nullam congue metus quis varius commodo. Praesent fringilla turpis sem, ut pretium massa elementum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
)

review3 = Review.create!(
    reviewer_name: 'Felicia',
    reviewer_description: 'Entrepreneur',
    reviewer_location: 'Hac Habitasse, GmbH',
    title: 'Eros Nisi',
    body: 'Nullam congue metus quis varius commodo. Praesent fringilla turpis sem, ut pretium massa elementum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
)